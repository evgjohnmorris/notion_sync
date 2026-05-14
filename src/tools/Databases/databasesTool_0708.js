/**
 * Generated Tool: databasesTool_0708
 * Domain: Databases
 * ID: 0708
 */
exports.databasesTool_0708 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0708:', error);
    throw error;
  }
};
