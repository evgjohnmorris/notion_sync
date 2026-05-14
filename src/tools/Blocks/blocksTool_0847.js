/**
 * Generated Tool: blocksTool_0847
 * Domain: Blocks
 * ID: 0847
 */
exports.blocksTool_0847 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0847:', error);
    throw error;
  }
};
