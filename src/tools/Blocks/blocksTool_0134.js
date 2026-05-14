/**
 * Generated Tool: blocksTool_0134
 * Domain: Blocks
 * ID: 0134
 */
exports.blocksTool_0134 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0134:', error);
    throw error;
  }
};
