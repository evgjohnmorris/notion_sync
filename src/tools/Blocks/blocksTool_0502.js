/**
 * Generated Tool: blocksTool_0502
 * Domain: Blocks
 * ID: 0502
 */
exports.blocksTool_0502 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0502:', error);
    throw error;
  }
};
