/**
 * Generated Tool: blocksTool_0988
 * Domain: Blocks
 * ID: 0988
 */
exports.blocksTool_0988 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0988:', error);
    throw error;
  }
};
