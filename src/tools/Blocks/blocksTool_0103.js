/**
 * Generated Tool: blocksTool_0103
 * Domain: Blocks
 * ID: 0103
 */
exports.blocksTool_0103 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0103:', error);
    throw error;
  }
};
