/**
 * Generated Tool: blocksTool_0459
 * Domain: Blocks
 * ID: 0459
 */
exports.blocksTool_0459 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0459:', error);
    throw error;
  }
};
