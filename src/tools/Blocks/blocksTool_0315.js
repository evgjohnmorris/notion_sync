/**
 * Generated Tool: blocksTool_0315
 * Domain: Blocks
 * ID: 0315
 */
exports.blocksTool_0315 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0315:', error);
    throw error;
  }
};
