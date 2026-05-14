/**
 * Generated Tool: blocksTool_0278
 * Domain: Blocks
 * ID: 0278
 */
exports.blocksTool_0278 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0278:', error);
    throw error;
  }
};
