/**
 * Generated Tool: blocksTool_0665
 * Domain: Blocks
 * ID: 0665
 */
exports.blocksTool_0665 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0665:', error);
    throw error;
  }
};
