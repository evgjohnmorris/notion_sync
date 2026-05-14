/**
 * Generated Tool: blocksTool_0888
 * Domain: Blocks
 * ID: 0888
 */
exports.blocksTool_0888 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0888:', error);
    throw error;
  }
};
