/**
 * Generated Tool: blocksTool_0967
 * Domain: Blocks
 * ID: 0967
 */
exports.blocksTool_0967 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0967:', error);
    throw error;
  }
};
