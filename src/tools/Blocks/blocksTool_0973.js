/**
 * Generated Tool: blocksTool_0973
 * Domain: Blocks
 * ID: 0973
 */
exports.blocksTool_0973 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0973:', error);
    throw error;
  }
};
