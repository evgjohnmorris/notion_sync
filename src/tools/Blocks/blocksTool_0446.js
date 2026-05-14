/**
 * Generated Tool: blocksTool_0446
 * Domain: Blocks
 * ID: 0446
 */
exports.blocksTool_0446 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0446:', error);
    throw error;
  }
};
