/**
 * Generated Tool: blocksTool_0498
 * Domain: Blocks
 * ID: 0498
 */
exports.blocksTool_0498 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0498:', error);
    throw error;
  }
};
