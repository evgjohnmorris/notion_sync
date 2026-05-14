/**
 * Generated Tool: blocksTool_0538
 * Domain: Blocks
 * ID: 0538
 */
exports.blocksTool_0538 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0538:', error);
    throw error;
  }
};
