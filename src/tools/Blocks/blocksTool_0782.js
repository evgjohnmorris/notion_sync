/**
 * Generated Tool: blocksTool_0782
 * Domain: Blocks
 * ID: 0782
 */
exports.blocksTool_0782 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0782:', error);
    throw error;
  }
};
