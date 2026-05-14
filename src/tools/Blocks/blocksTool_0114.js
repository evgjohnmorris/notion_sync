/**
 * Generated Tool: blocksTool_0114
 * Domain: Blocks
 * ID: 0114
 */
exports.blocksTool_0114 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0114:', error);
    throw error;
  }
};
