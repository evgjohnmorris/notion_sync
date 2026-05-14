/**
 * Generated Tool: blocksTool_0777
 * Domain: Blocks
 * ID: 0777
 */
exports.blocksTool_0777 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0777:', error);
    throw error;
  }
};
