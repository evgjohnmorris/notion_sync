/**
 * Generated Tool: blocksTool_0177
 * Domain: Blocks
 * ID: 0177
 */
exports.blocksTool_0177 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0177:', error);
    throw error;
  }
};
