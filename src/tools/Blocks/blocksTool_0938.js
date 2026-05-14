/**
 * Generated Tool: blocksTool_0938
 * Domain: Blocks
 * ID: 0938
 */
exports.blocksTool_0938 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0938:', error);
    throw error;
  }
};
