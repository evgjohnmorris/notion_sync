/**
 * Generated Tool: blocksTool_0566
 * Domain: Blocks
 * ID: 0566
 */
exports.blocksTool_0566 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0566:', error);
    throw error;
  }
};
