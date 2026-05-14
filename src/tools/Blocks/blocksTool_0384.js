/**
 * Generated Tool: blocksTool_0384
 * Domain: Blocks
 * ID: 0384
 */
exports.blocksTool_0384 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0384:', error);
    throw error;
  }
};
