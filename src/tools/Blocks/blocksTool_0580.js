/**
 * Generated Tool: blocksTool_0580
 * Domain: Blocks
 * ID: 0580
 */
exports.blocksTool_0580 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0580:', error);
    throw error;
  }
};
