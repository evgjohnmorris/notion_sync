/**
 * Generated Tool: blocksTool_0337
 * Domain: Blocks
 * ID: 0337
 */
exports.blocksTool_0337 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0337:', error);
    throw error;
  }
};
