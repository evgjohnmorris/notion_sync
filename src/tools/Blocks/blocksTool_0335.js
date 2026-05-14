/**
 * Generated Tool: blocksTool_0335
 * Domain: Blocks
 * ID: 0335
 */
exports.blocksTool_0335 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0335:', error);
    throw error;
  }
};
