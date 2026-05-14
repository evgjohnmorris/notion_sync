/**
 * Generated Tool: blocksTool_0424
 * Domain: Blocks
 * ID: 0424
 */
exports.blocksTool_0424 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0424:', error);
    throw error;
  }
};
