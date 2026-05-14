/**
 * Generated Tool: blocksTool_0790
 * Domain: Blocks
 * ID: 0790
 */
exports.blocksTool_0790 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0790:', error);
    throw error;
  }
};
