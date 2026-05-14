/**
 * Generated Tool: blocksTool_0156
 * Domain: Blocks
 * ID: 0156
 */
exports.blocksTool_0156 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0156:', error);
    throw error;
  }
};
