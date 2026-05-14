/**
 * Generated Tool: blocksTool_0825
 * Domain: Blocks
 * ID: 0825
 */
exports.blocksTool_0825 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0825:', error);
    throw error;
  }
};
