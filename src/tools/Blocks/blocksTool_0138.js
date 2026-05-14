/**
 * Generated Tool: blocksTool_0138
 * Domain: Blocks
 * ID: 0138
 */
exports.blocksTool_0138 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0138:', error);
    throw error;
  }
};
