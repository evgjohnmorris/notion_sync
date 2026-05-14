/**
 * Generated Tool: blocksTool_0464
 * Domain: Blocks
 * ID: 0464
 */
exports.blocksTool_0464 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0464:', error);
    throw error;
  }
};
