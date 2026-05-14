/**
 * Generated Tool: blocksTool_0442
 * Domain: Blocks
 * ID: 0442
 */
exports.blocksTool_0442 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0442:', error);
    throw error;
  }
};
