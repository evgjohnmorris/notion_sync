/**
 * Generated Tool: blocksTool_0238
 * Domain: Blocks
 * ID: 0238
 */
exports.blocksTool_0238 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0238:', error);
    throw error;
  }
};
