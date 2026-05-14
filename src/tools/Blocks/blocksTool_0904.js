/**
 * Generated Tool: blocksTool_0904
 * Domain: Blocks
 * ID: 0904
 */
exports.blocksTool_0904 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0904:', error);
    throw error;
  }
};
