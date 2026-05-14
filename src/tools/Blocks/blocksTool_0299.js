/**
 * Generated Tool: blocksTool_0299
 * Domain: Blocks
 * ID: 0299
 */
exports.blocksTool_0299 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0299:', error);
    throw error;
  }
};
