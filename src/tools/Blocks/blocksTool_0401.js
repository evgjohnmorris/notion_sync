/**
 * Generated Tool: blocksTool_0401
 * Domain: Blocks
 * ID: 0401
 */
exports.blocksTool_0401 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0401:', error);
    throw error;
  }
};
