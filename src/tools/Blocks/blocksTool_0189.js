/**
 * Generated Tool: blocksTool_0189
 * Domain: Blocks
 * ID: 0189
 */
exports.blocksTool_0189 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0189:', error);
    throw error;
  }
};
