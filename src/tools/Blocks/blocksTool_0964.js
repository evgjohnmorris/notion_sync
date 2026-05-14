/**
 * Generated Tool: blocksTool_0964
 * Domain: Blocks
 * ID: 0964
 */
exports.blocksTool_0964 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0964:', error);
    throw error;
  }
};
