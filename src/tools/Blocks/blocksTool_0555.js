/**
 * Generated Tool: blocksTool_0555
 * Domain: Blocks
 * ID: 0555
 */
exports.blocksTool_0555 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0555:', error);
    throw error;
  }
};
