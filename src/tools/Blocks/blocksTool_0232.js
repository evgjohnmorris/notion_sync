/**
 * Generated Tool: blocksTool_0232
 * Domain: Blocks
 * ID: 0232
 */
exports.blocksTool_0232 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0232:', error);
    throw error;
  }
};
