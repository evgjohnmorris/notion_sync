/**
 * Generated Tool: blocksTool_0408
 * Domain: Blocks
 * ID: 0408
 */
exports.blocksTool_0408 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0408:', error);
    throw error;
  }
};
