/**
 * Generated Tool: blocksTool_0649
 * Domain: Blocks
 * ID: 0649
 */
exports.blocksTool_0649 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0649:', error);
    throw error;
  }
};
