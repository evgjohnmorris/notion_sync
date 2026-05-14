/**
 * Generated Tool: blocksTool_0017
 * Domain: Blocks
 * ID: 0017
 */
exports.blocksTool_0017 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0017:', error);
    throw error;
  }
};
