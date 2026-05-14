/**
 * Generated Tool: blocksTool_0116
 * Domain: Blocks
 * ID: 0116
 */
exports.blocksTool_0116 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0116:', error);
    throw error;
  }
};
