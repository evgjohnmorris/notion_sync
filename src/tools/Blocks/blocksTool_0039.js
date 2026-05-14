/**
 * Generated Tool: blocksTool_0039
 * Domain: Blocks
 * ID: 0039
 */
exports.blocksTool_0039 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0039:', error);
    throw error;
  }
};
