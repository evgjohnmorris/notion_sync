/**
 * Generated Tool: blocksTool_0975
 * Domain: Blocks
 * ID: 0975
 */
exports.blocksTool_0975 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0975:', error);
    throw error;
  }
};
