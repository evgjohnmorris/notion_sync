/**
 * Generated Tool: blocksTool_0857
 * Domain: Blocks
 * ID: 0857
 */
exports.blocksTool_0857 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0857:', error);
    throw error;
  }
};
