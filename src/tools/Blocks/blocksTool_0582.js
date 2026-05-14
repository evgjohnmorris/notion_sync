/**
 * Generated Tool: blocksTool_0582
 * Domain: Blocks
 * ID: 0582
 */
exports.blocksTool_0582 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0582:', error);
    throw error;
  }
};
