/**
 * Generated Tool: blocksTool_0428
 * Domain: Blocks
 * ID: 0428
 */
exports.blocksTool_0428 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0428:', error);
    throw error;
  }
};
