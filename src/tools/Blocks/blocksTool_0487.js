/**
 * Generated Tool: blocksTool_0487
 * Domain: Blocks
 * ID: 0487
 */
exports.blocksTool_0487 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0487:', error);
    throw error;
  }
};
