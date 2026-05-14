/**
 * Generated Tool: blocksTool_0409
 * Domain: Blocks
 * ID: 0409
 */
exports.blocksTool_0409 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0409:', error);
    throw error;
  }
};
