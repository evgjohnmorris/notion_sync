/**
 * Generated Tool: blocksTool_0955
 * Domain: Blocks
 * ID: 0955
 */
exports.blocksTool_0955 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0955:', error);
    throw error;
  }
};
