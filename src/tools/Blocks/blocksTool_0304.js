/**
 * Generated Tool: blocksTool_0304
 * Domain: Blocks
 * ID: 0304
 */
exports.blocksTool_0304 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0304:', error);
    throw error;
  }
};
